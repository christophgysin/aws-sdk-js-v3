import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient.ts";
import { DescribeMultiplexProgramRequest, DescribeMultiplexProgramResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1DescribeMultiplexProgramCommand,
  serializeAws_restJson1DescribeMultiplexProgramCommand,
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

export interface DescribeMultiplexProgramCommandInput extends DescribeMultiplexProgramRequest {}
export interface DescribeMultiplexProgramCommandOutput extends DescribeMultiplexProgramResponse, __MetadataBearer {}

/**
 * Get the details for a program in a multiplex.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DescribeMultiplexProgramCommand } from "../../client-medialive/mod.ts";
 * // const { MediaLiveClient, DescribeMultiplexProgramCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new DescribeMultiplexProgramCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMultiplexProgramCommandInput} for command's `input` shape.
 * @see {@link DescribeMultiplexProgramCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeMultiplexProgramCommand extends $Command<
  DescribeMultiplexProgramCommandInput,
  DescribeMultiplexProgramCommandOutput,
  MediaLiveClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeMultiplexProgramCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaLiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeMultiplexProgramCommandInput, DescribeMultiplexProgramCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaLiveClient";
    const commandName = "DescribeMultiplexProgramCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeMultiplexProgramRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeMultiplexProgramResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeMultiplexProgramCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeMultiplexProgramCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeMultiplexProgramCommandOutput> {
    return deserializeAws_restJson1DescribeMultiplexProgramCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
