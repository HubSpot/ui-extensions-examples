import React, { useEffect, useState } from "react";
import {
  Text,
  hubspot,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  LoadingSpinner,
  Flex,
  Image,
} from "@hubspot/ui-extensions";

const PAGE_SIZE = 5;

interface Artwork {
  id: number;
  title: string | null;
  artist_display: string | null;
  date_display: string | null;
  image_id: string | null;
}

hubspot.extend(() => <DataTable />);

const DataTable = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    let ignore = false;
    const fetchData = async () => {
      setLoading(true);
      const url = `https://api.artic.edu/api/v1/artworks?page=${page}&limit=${PAGE_SIZE}&fields=id,title,artist_display,date_display,image_id`;
      const response = await hubspot.fetch(url, { method: "GET" });
      if (!ignore) {
        const data = await response.json();
        setArtworks(data.data);
        setTotalPages(data.pagination ? data.pagination.total_pages : 1);
        setLoading(false);
      }
    };
    fetchData();
    return () => { ignore = true; };
  }, [page]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <>
      <Table
        paginated={true}
        pageCount={totalPages}
        page={page}
        onPageChange={handlePageChange}
      >
        <TableHead>
          <TableRow>
            <TableHeader>Image</TableHeader>
            <TableHeader>Title</TableHeader>
            <TableHeader>Artist</TableHeader>
            <TableHeader>Date</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={4}>
                <Flex direction="column" align="center" gap="md">
                  <LoadingSpinner showLabel layout="centered" size="md" label="Loading..." />
                </Flex>
              </TableCell>
            </TableRow>
          ) : (
            artworks.map((art) => (
              <TableRow key={art.id}>
                <TableCell>
                  {art.image_id ? (
                    <Image
                      src={`https://www.artic.edu/iiif/2/${art.image_id}/full/400,/0/default.jpg`}
                      alt={art.title || "Artwork image"}
                      width={200}
                    />
                  ) : (
                    <Text>No image</Text>
                  )}
                </TableCell>
                <TableCell><Text>{art.title || "Untitled"}</Text></TableCell>
                <TableCell><Text>{art.artist_display || "Unknown"}</Text></TableCell>
                <TableCell><Text>{art.date_display || "N/A"}</Text></TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </>
  );
};
