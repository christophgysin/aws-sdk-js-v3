import { OpsWorksCMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksCMClient.ts";
import { DescribeServersRequest, DescribeServersResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeServersCommand,
  serializeAws_json1_1DescribeServersCommand,
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

export type DescribeServersCommandInput = DescribeServersRequest;
export type DescribeServersCommandOutput = DescribeServersResponse & __MetadataBearer;

/**
 * <p>
 *       Lists all configuration management servers that are identified with your account.
 *       Only the stored results from Amazon DynamoDB
 *       are returned. AWS OpsWorks CM does not query other services.
 *     </p>
 *          <p>
 *       This operation is synchronous.
 *     </p>
 *          <p>
 *       A <code>ResourceNotFoundException</code> is thrown when the server does not exist.
 *       A <code>ValidationException</code> is raised when parameters of the request are not valid.
 *     </p>
 */
export class DescribeServersCommand extends $Command<
  DescribeServersCommandInput,
  DescribeServersCommandOutput,
  OpsWorksCMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeServersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpsWorksCMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeServersCommandInput, DescribeServersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksCMClient";
    const commandName = "DescribeServersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeServersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeServersResponse.filterSensitiveLog,
    };

    if (typeof logger.info === "function") {
      logger.info({
        clientName,
        commandName,
      });
    }

    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeServersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeServersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeServersCommandOutput> {
    return deserializeAws_json1_1DescribeServersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
