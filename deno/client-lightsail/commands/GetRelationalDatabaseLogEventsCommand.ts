import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient.ts";
import { GetRelationalDatabaseLogEventsRequest, GetRelationalDatabaseLogEventsResult } from "../models/models_1.ts";
import {
  deserializeAws_json1_1GetRelationalDatabaseLogEventsCommand,
  serializeAws_json1_1GetRelationalDatabaseLogEventsCommand,
} from "../protocols/Aws_json1_1.ts";
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

export interface GetRelationalDatabaseLogEventsCommandInput extends GetRelationalDatabaseLogEventsRequest {}
export interface GetRelationalDatabaseLogEventsCommandOutput
  extends GetRelationalDatabaseLogEventsResult,
    __MetadataBearer {}

/**
 * <p>Returns a list of log events for a database in Amazon Lightsail.</p>
 */
export class GetRelationalDatabaseLogEventsCommand extends $Command<
  GetRelationalDatabaseLogEventsCommandInput,
  GetRelationalDatabaseLogEventsCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetRelationalDatabaseLogEventsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRelationalDatabaseLogEventsCommandInput, GetRelationalDatabaseLogEventsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetRelationalDatabaseLogEventsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRelationalDatabaseLogEventsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetRelationalDatabaseLogEventsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetRelationalDatabaseLogEventsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetRelationalDatabaseLogEventsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetRelationalDatabaseLogEventsCommandOutput> {
    return deserializeAws_json1_1GetRelationalDatabaseLogEventsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
