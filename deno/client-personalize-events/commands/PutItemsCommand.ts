import {
  PersonalizeEventsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PersonalizeEventsClient.ts";
import { PutItemsRequest } from "../models/models_0.ts";
import {
  deserializeAws_restJson1PutItemsCommand,
  serializeAws_restJson1PutItemsCommand,
} from "../protocols/Aws_restJson1.ts";
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

export interface PutItemsCommandInput extends PutItemsRequest {}
export interface PutItemsCommandOutput extends __MetadataBearer {}

/**
 * <p>Adds one or more items to an Items dataset. For more information see
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-items.html">Importing Items Incrementally</a>.
 *      </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeEventsClient, PutItemsCommand } from "../../client-personalize-events/mod.ts";
 * // const { PersonalizeEventsClient, PutItemsCommand } = require("@aws-sdk/client-personalize-events"); // CommonJS import
 * const client = new PersonalizeEventsClient(config);
 * const command = new PutItemsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutItemsCommandInput} for command's `input` shape.
 * @see {@link PutItemsCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutItemsCommand extends $Command<
  PutItemsCommandInput,
  PutItemsCommandOutput,
  PersonalizeEventsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutItemsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PersonalizeEventsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutItemsCommandInput, PutItemsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeEventsClient";
    const commandName = "PutItemsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutItemsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutItemsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutItemsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutItemsCommandOutput> {
    return deserializeAws_restJson1PutItemsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
