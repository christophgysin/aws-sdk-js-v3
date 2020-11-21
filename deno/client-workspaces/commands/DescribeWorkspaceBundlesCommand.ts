
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient.ts";
import { DescribeWorkspaceBundlesRequest, DescribeWorkspaceBundlesResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeWorkspaceBundlesCommand,
  serializeAws_json1_1DescribeWorkspaceBundlesCommand,
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

export type DescribeWorkspaceBundlesCommandInput = DescribeWorkspaceBundlesRequest;
export type DescribeWorkspaceBundlesCommandOutput = DescribeWorkspaceBundlesResult & __MetadataBearer;

export class DescribeWorkspaceBundlesCommand extends $Command<
  DescribeWorkspaceBundlesCommandInput,
  DescribeWorkspaceBundlesCommandOutput,
  WorkSpacesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeWorkspaceBundlesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkSpacesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeWorkspaceBundlesCommandInput, DescribeWorkspaceBundlesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "DescribeWorkspaceBundlesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeWorkspaceBundlesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeWorkspaceBundlesResult.filterSensitiveLog,
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

  private serialize(input: DescribeWorkspaceBundlesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeWorkspaceBundlesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeWorkspaceBundlesCommandOutput> {
    return deserializeAws_json1_1DescribeWorkspaceBundlesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
