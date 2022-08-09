// For external API calls
import {ExternalCard, InternalCard, ServerlessAction, StaticCard} from "./types";

const axios = require('axios');
// For HubSpot API calls (HubSpot node API client)
const hubspot = require('@hubspot/api-client');

exports.main = async ({context = {}, sendResponse}: ServerlessAction) => {
    // Instantiating HubSpot node API client ok
    const hubspotClient = new hubspot.Client({
        accessToken: context.secrets.PRIVATE_APP_ACCESS_TOKEN,
    });

    // Static CRM card example
    const staticCard: StaticCard = {
        objectId: 1,
        title: 'Sample project custom CRM card',
        desc: `A custom CRM card is a UI extension that displays custom info from either HubSpot or an external system. It can also include custom actions—click the "Get Inspired" button to see example data from the ZenQuotes API.`,
    };

    // Make a call to zenquote public api and create a CRM card with result
    const getExternalCard = async () => {
        try {
            const { data } = await axios.get('https://zenquotes.io/api/random');

            return {
                objectId: 2,
                link: 'https://zenquotes.io/',
                title: 'Inspirational quotes provided by ZenQuotes API',
                quote: data[0].q,
                author: data[0].a,
            } as ExternalCard;
        } catch (error: any) {
            throw new Error(
                `There was an error fetching the quote': ${error.message}`
            );
        }
    };

    // Make a call to the HubSpot contacts API and create a CRM card with result
    const getInternalCard = async () => {
        try {
            // Fetching contacts from CRM
            const resp = await hubspotClient.crm.contacts.basicApi.getPage();

            return {
                objectId: 3,
                title: 'First contact in account',
                firstname: resp.body.results[0].properties.firstname,
            } as InternalCard;
        } catch (error: any) {
            throw new Error(
                `There was an error fetching the contact': ${error.message}`
            );
        }
    };

    // Assemble cards
    try {
        const internalCard = await getInternalCard();
        const externalCard = await getExternalCard();

        sendResponse({
            results: [staticCard, internalCard, externalCard],
            primaryAction: {
                type: 'SERVERLESS_ACTION_HOOK',
                serverlessFunction: 'crm-card',
                label: 'Get Inspired',
            },
        });
    } catch (error: any) {
        throw new Error(
            `There was an error creating these cards': ${error.message}`
        );
    }
};
