import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient.ts";
import { GetImageRecipePolicyRequest, GetImageRecipePolicyResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetImageRecipePolicyCommand,
  serializeAws_restJson1GetImageRecipePolicyCommand,
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

export interface GetImageRecipePolicyCommandInput extends GetImageRecipePolicyRequest {}
export interface GetImageRecipePolicyCommandOutput extends GetImageRecipePolicyResponse, __MetadataBearer {}

/**
 * <p> Gets an image recipe policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, GetImageRecipePolicyCommand } from "../../client-imagebuilder/mod.ts";
 * // const { ImagebuilderClient, GetImageRecipePolicyCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new GetImageRecipePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetImageRecipePolicyCommandInput} for command's `input` shape.
 * @see {@link GetImageRecipePolicyCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetImageRecipePolicyCommand extends $Command<
  GetImageRecipePolicyCommandInput,
  GetImageRecipePolicyCommandOutput,
  ImagebuilderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetImageRecipePolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ImagebuilderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetImageRecipePolicyCommandInput, GetImageRecipePolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ImagebuilderClient";
    const commandName = "GetImageRecipePolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetImageRecipePolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetImageRecipePolicyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetImageRecipePolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetImageRecipePolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetImageRecipePolicyCommandOutput> {
    return deserializeAws_restJson1GetImageRecipePolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
