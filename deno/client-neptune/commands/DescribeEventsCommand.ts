import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient.ts";
import { DescribeEventsMessage, EventsMessage } from "../models/models_0.ts";
import {
  deserializeAws_queryDescribeEventsCommand,
  serializeAws_queryDescribeEventsCommand,
} from "../protocols/Aws_query.ts";
import { getSerdePlugin } from "../../middleware-serde/mod.ts";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "../../protocol-http/mod.ts";
import { Command as $Command } from "../../smithy-client/mod.ts";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "../../types/mod.ts";

export interface DescribeEventsCommandInput extends DescribeEventsMessage {}
export interface DescribeEventsCommandOutput extends EventsMessage, __MetadataBearer {}

/**
 * <p>Returns events related to DB instances, DB security groups, DB snapshots, and DB parameter
 *       groups for the past 14 days. Events specific to a particular DB instance, DB security group,
 *       database snapshot, or DB parameter group can be obtained by providing the name as a parameter.
 *       By default, the past hour of events are returned.</p>
 */
export class DescribeEventsCommand extends $Command<
  DescribeEventsCommandInput,
  DescribeEventsCommandOutput,
  NeptuneClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeEventsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NeptuneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeEventsCommandInput, DescribeEventsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneClient";
    const commandName = "DescribeEventsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeEventsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: EventsMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeEventsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeEventsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeEventsCommandOutput> {
    return deserializeAws_queryDescribeEventsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
