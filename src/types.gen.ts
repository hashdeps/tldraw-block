import { Entity, JsonObject } from "@blockprotocol/graph";

/**
 * This file was automatically generated – do not edit it.
 * @see https://blockprotocol.org/@tldraw/types/entity-type/drawing-block/v/2 for the root JSON Schema these types were generated from
 * Types for link entities and their destination were generated to a depth of 2 from the root
 */

/**
 * The height of a UI element in pixels.
 */
export type HeightInPixelsPropertyValue = NumberDataValue;
/**
 * An arithmetical value (in the Real number system)
 */
export type NumberDataValue = number;
/**
 * The width of a UI element in pixels.
 */
export type WidthInPixelsPropertyValue = NumberDataValue;
/**
 * Defines whether or not this thing should display in "dark mode".
 *
 * Generally a user interface design setting which inverts the standard balance of dark and light, instead opting for predominantly using darker colors (such as for backgrounds), and reducing usage of lighter colors.
 */
export type EnableDarkModePropertyValue = BooleanDataValue;
/**
 * A True or False value
 */
export type BooleanDataValue = boolean;
/**
 * The contents of the Drawing Block canvas, serialized and persisted as a string.
 */
export type DrawingBlockSerializedDocumentPropertyValue = TextDataValue;
/**
 * An ordered sequence of characters
 */
export type TextDataValue = string;

/**
 * The block entity of the “Drawing” block.
 *
 * See: https://blockprotocol.org/@tldraw/blocks/drawing
 */
export type DrawingBlockProperties = {
  "https://blockprotocol.org/@blockprotocol/types/property-type/height-in-pixels/"?: HeightInPixelsPropertyValue;
  "https://blockprotocol.org/@blockprotocol/types/property-type/width-in-pixels/"?: WidthInPixelsPropertyValue;
  "https://blockprotocol.org/@blockprotocol/types/property-type/enable-dark-mode/"?: EnableDarkModePropertyValue;
  "https://blockprotocol.org/@tldraw/types/property-type/drawing-block-serialized-document/"?: DrawingBlockSerializedDocumentPropertyValue;
}

export type DrawingBlock = Entity<DrawingBlockProperties>;
export type DrawingBlockLinksByLinkTypeId = {

};

export type DrawingBlockLinkAndRightEntities = NonNullable<
  DrawingBlockLinksByLinkTypeId[keyof DrawingBlockLinksByLinkTypeId]
>;

export type RootEntity = DrawingBlock;
export type RootEntityLinkedEntities = DrawingBlockLinkAndRightEntities;
export type RootLinkMap = DrawingBlockLinksByLinkTypeId;