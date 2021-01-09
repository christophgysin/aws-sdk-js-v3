import { CognitoSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoSyncClient.ts";
import { DescribeIdentityUsageRequest, DescribeIdentityUsageResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DescribeIdentityUsageCommand,
  serializeAws_restJson1DescribeIdentityUsageCommand,
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

export type DescribeIdentityUsageCommandInput = DescribeIdentityUsageRequest;
export type DescribeIdentityUsageCommandOutput = DescribeIdentityUsageResponse & __MetadataBearer;

/**
 * <p>Gets usage information for an identity, including number of datasets and data usage.</p>
 *          <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>
 */
export class DescribeIdentityUsageCommand extends $Command<
  DescribeIdentityUsageCommandInput,
  DescribeIdentityUsageCommandOutput,
  CognitoSyncClientResolvedConfig
> {
  private resolved = false;
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeIdentityUsageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeIdentityUsageCommandInput, DescribeIdentityUsageCommandOutput> {
    if (!this.resolved) {
      this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
      this.resolved = true;
    }

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoSyncClient";
    const commandName = "DescribeIdentityUsageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeIdentityUsageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeIdentityUsageResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeIdentityUsageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeIdentityUsageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeIdentityUsageCommandOutput> {
    return deserializeAws_restJson1DescribeIdentityUsageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
