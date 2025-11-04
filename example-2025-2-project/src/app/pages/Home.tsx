import React from "react";
import { EmptyState, Link, Text, hubspot } from "@hubspot/ui-extensions";
import { HeaderActions, PrimaryHeaderActionButton, SecondaryHeaderActionButton } from "@hubspot/ui-extensions/pages/home";

hubspot.extend<"home">(({ context }) => {
  return <AppHomePage context={context} />;
});

const AppHomePage = ({ context }) => {

  console.log({context});

  const appHomesDocsLink = 'https://developers.hubspot.com/docs/apps/developer-platform/add-features/ui-extensibility/create-an-app-home-page#create-an-app-home-page';

  return (
    <>
      <HeaderActions>
        <PrimaryHeaderActionButton onClick={() => console.log('Primary Header Action 1')}>
          Primary 1
        </PrimaryHeaderActionButton>
        <SecondaryHeaderActionButton onClick={() => console.log('Secondary Header Action 1')}>
          Secondary 1
        </SecondaryHeaderActionButton>
        <SecondaryHeaderActionButton onClick={() => console.log('Secondary Header Action 2')}>
          Secondary 2
        </SecondaryHeaderActionButton>
      </HeaderActions>
      <EmptyState
        title="Build your application home page here!"
        layout="horizontal"
        imageName='building'
      >
        <Text>
          The app home page is a custom landing experience for your app in HubSpot.
          Check out the <Link href={appHomesDocsLink}>app home page documentation</Link> for more info.
        </Text>
      </EmptyState>
    </>
  );
};
