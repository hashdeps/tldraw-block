import { Entity, JsonObject } from "@blockprotocol/graph";

/**
 * This file was automatically generated – do not edit it.
 * @see https://blockprotocol-g5unaez7e.stage.hash.ai/@nate/types/entity-type/drawing/v/2 for the root JSON Schema these types were generated from
 * Types for link entities and their destination were generated to a depth of 2 from the root
 */

/**
 * Width (in pixels)
 */
export type Width = Number;
/**
 * An arithmetical value (in the Real number system)
 */
export type Number = number;
/**
 * Height (in pixels)
 */
export type Height = Number;
/**
 * Whether the entity is read only
 */
export type ReadOnly = Boolean;
/**
 * A True or False value
 */
export type Boolean = boolean;
/**
 * Whether the entity is in dark mode
 */
export type DarkMode = Boolean;
/**
 * Textual content
 */
export type Content = Text;
/**
 * An ordered sequence of characters
 */
export type Text = string;

/**
 * A canvas drawing
 */
export type DrawingProperties = {
  "https://blockprotocol-gqpc30oin.stage.hash.ai/@nate/types/property-type/width/"?: Width;
  "https://blockprotocol-g5unaez7e.stage.hash.ai/@nate/types/property-type/height/"?: Height;
  "https://blockprotocol-g5unaez7e.stage.hash.ai/@nate/types/property-type/read-only/"?: ReadOnly;
  "https://blockprotocol-g5unaez7e.stage.hash.ai/@nate/types/property-type/dark-mode/"?: DarkMode;
  "https://blockprotocol-pktjfgq1m.stage.hash.ai/@blockprotocol/types/property-type/content/": Content;
}

export type Drawing = Entity<DrawingProperties>;
export type DrawingLinksByLinkTypeId = {

};

export type DrawingLinkAndRightEntities = NonNullable<
  DrawingLinksByLinkTypeId[keyof DrawingLinksByLinkTypeId]
>;

export type RootEntity = Drawing;
export type RootEntityLinkedEntities = DrawingLinkAndRightEntities;
export type RootLinkMap = DrawingLinksByLinkTypeId;