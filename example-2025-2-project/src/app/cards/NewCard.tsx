import React from "react";
import { EmptyState, Link, Text } from "@hubspot/ui-extensions";
import { hubspot } from "@hubspot/ui-extensions";

hubspot.extend(({ context }) => <Extension context={context} />);

const Extension = ({ context }) => {

  const appCardDocsLink = 'https://developers.hubspot.com/docs/apps/developer-platform/add-features/ui-extensibility/app-cards/overview';

  console.log({context});

  return (
    <>
      <EmptyState
        title="Build your app card here!"
        layout="vertical"
        imageName='building'
      >
        <Text>
          Add a layer of UI customization to your app by including app cards that can display data, allow users to perform actions, and more.
          Check out the <Link href={appCardDocsLink}>app card documentation</Link> for more info.
        </Text>
      </EmptyState>
    </>
  );
};
