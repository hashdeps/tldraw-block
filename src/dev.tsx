/**
 * This is the entry point for developing and debugging.
 * This file is not bundled with the block during the build process.
 */
import { MockBlockDock } from "mock-block-dock";
import { render } from "react-dom";

import Component from "./index";
import { propertyIds } from "./property-ids";
import { RootEntity } from "./types.gen";
import packageJSON from "../package.json";

const node = document.getElementById("app");

const initialData: RootEntity = {
  metadata: {
    recordId: {
      entityId: "entity-drawing",
      editionId: "1",
    },
    entityTypeId:
      "https://blockprotocol-g5unaez7e.stage.hash.ai/@nate/types/entity-type/drawing/v/2",
  },
  properties: {
    [propertyIds.content]: "",
    [propertyIds.height]: 400,
    [propertyIds.darkMode]: false,
  },
};

const App = () => (
  <MockBlockDock
    blockDefinition={{ ReactComponent: Component }}
    blockEntityRecordId={initialData.metadata.recordId}
    initialData={{ initialEntities: [initialData] }}
    blockInfo={packageJSON.blockprotocol}
    debug
  />
);

render(<App />, node);
