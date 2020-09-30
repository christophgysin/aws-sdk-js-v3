import {
  SENSITIVE_STRING,
  LazyJsonString as __LazyJsonString,
  SmithyException as __SmithyException,
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Provide a valid value for the field or parameter.</p>
 */
export interface InvalidInputException extends __SmithyException, $MetadataBearer {
  name: "InvalidInputException";
  $fault: "client";
  message?: string;
}

export namespace InvalidInputException {
  export const filterSensitiveLog = (obj: InvalidInputException): any => ({
    ...obj,
  });
}

/**
 * <p>Represents user interaction event information sent using the
 *       <code>PutEvents</code> API.</p>
 */
export interface Event {
  /**
   * <p>The type of event. This property corresponds to the <code>EVENT_TYPE</code>
   *       field of the Interactions schema.</p>
   */
  eventType: string | undefined;

  /**
   * <p>A string map of event-specific data that you might choose to record. For example, if a
   *       user rates a movie on your site, you might send the movie ID and rating, and the number of
   *       movie ratings made by the user.</p>
   *          <p>Each item in the map consists of a key-value pair. For example,</p>
   *          <p>
   *             <code>{"itemId": "movie1"}</code>
   *          </p>
   *          <p>
   *             <code>{"itemId": "movie2", "eventValue": "4.5"}</code>
   *          </p>
   *          <p>
   *             <code>{"itemId": "movie3", "eventValue": "3", "numberOfRatings": "12"}</code>
   *          </p>
   *          <p>The keys use camel case names that match the fields in the Interactions
   *       schema. The <code>itemId</code> and <code>eventValue</code> keys correspond to the
   *       <code>ITEM_ID</code> and <code>EVENT_VALUE</code> fields.
   *       In the above example, the <code>eventType</code> might be 'MovieRating' with
   *       <code>eventValue</code> being the rating. The <code>numberOfRatings</code> would match the
   *       'NUMBER_OF_RATINGS' field defined in the Interactions schema.</p>
   */
  properties: __LazyJsonString | string | undefined;

  /**
   * <p>The timestamp on the client side when the event occurred.</p>
   */
  sentAt: Date | undefined;

  /**
   * <p>An ID associated with the event. If an event ID is not provided, Amazon Personalize generates
   *       a unique ID for the event. An event ID is not used as an input to the model. Amazon Personalize uses
   *       the event ID to distinquish unique events. Any subsequent events after the first with the
   *       same event ID are not used in model training.</p>
   */
  eventId?: string;
}

export namespace Event {
  export const filterSensitiveLog = (obj: Event): any => ({
    ...obj,
  });
}

export interface PutEventsRequest {
  /**
   * <p>A list of event data from the session.</p>
   */
  eventList: Event[] | undefined;

  /**
   * <p>The user associated with the event.</p>
   */
  userId?: string;

  /**
   * <p>The tracking ID for the event.
   *       The ID is generated by a call to the
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html">CreateEventTracker</a> API.</p>
   */
  trackingId: string | undefined;

  /**
   * <p>The session ID associated with the user's visit.</p>
   */
  sessionId: string | undefined;
}

export namespace PutEventsRequest {
  export const filterSensitiveLog = (obj: PutEventsRequest): any => ({
    ...obj,
  });
}
