import {Then} from '@cucumber/cucumber'
import { ScenarioWorld } from '../setup/world'
import  { waitFor } from '../../support/wait-for-behavior'
import { getElementLocator } from '../../support/web-element-helper'
import { ElementKey } from '../../env/global'
import { getIframeElement } from '../../support/html-behavior'

Then(
    /^the "([^"]*)" on the "([^"]*)" iframe should( not)? be displayed$/,
    async function(this:ScenarioWorld, elementKey:ElementKey, iframeName: string, negate: boolean){
        const {
            screen: { page },
            globalConfig,
        } = this;

        console.log(`the ${elementKey} on the ${iframeName} should ${negate?'not ':''}be displayed`);

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);
        const iframeIdentifier = getElementLocator(page, iframeName, globalConfig);


        await waitFor(async () => {
            const elementIframe = await getIframeElement(page, iframeIdentifier);

            const isElementVisible = (await elementIframe?.$(elementIdentifier)) != null;
            return isElementVisible === !negate;
        })
    }
)

Then(
    /^the "([^"]*)" on the "([^"]*)" iframe should( not)? contain the text "(.*)"$/,
    async function(this:ScenarioWorld, elementKey:ElementKey, iframeName: string, negate: boolean, expectedElementText: string) {
        const {
            screen: { page },
            globalConfig
        } = this;

        console.log(`the ${elementKey} should ${negate?'not ':''} contain the text ${expectedElementText}`)

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);
        const iframeIdentifier = getElementLocator(page, iframeName, globalConfig);


        await waitFor(async () => {
            const elementIframe = await getIframeElement(page, iframeIdentifier);

            const elementText = await elementIframe?.textContent(elementIdentifier);
            return elementText?.includes(expectedElementText) === !negate;
        })
    }
)

Then(
    /^the "([^"]*)" on the "([^"]*)" iframe should( not)? equal the text "(.*)"$/,
    async function(this:ScenarioWorld, elementKey:ElementKey, iframeName: string, negate: boolean, expectedElementText: string) {
        const {
            screen : { page },
            globalConfig
        } = this;

        console.log(`the ${elementKey} should ${negate?'not ':''}equal the text ${expectedElementText}`)


        const iframeIdentifier = getElementLocator(page, iframeName, globalConfig);
        const elementIframe = await getIframeElement(page, iframeIdentifier);

        await waitFor(async () => {
            const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

            const elementText = await elementIframe?.textContent(elementIdentifier);
            return (elementText === expectedElementText) === !negate;
        })
    }
)