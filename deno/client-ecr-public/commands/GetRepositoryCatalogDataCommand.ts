import { ECRPUBLICClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRPUBLICClient.ts";
import { GetRepositoryCatalogDataRequest, GetRepositoryCatalogDataResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetRepositoryCatalogDataCommand,
  serializeAws_json1_1GetRepositoryCatalogDataCommand,
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

export interface GetRepositoryCatalogDataCommandInput extends GetRepositoryCatalogDataRequest {}
export interface GetRepositoryCatalogDataCommandOutput extends GetRepositoryCatalogDataResponse, __MetadataBearer {}

/**
 * <p>Retrieve catalog metadata for a repository in a public registry. This metadata is
 *          displayed publicly in the Amazon ECR Public Gallery.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRPUBLICClient, GetRepositoryCatalogDataCommand } from "../../client-ecr-public/mod.ts";
 * // const { ECRPUBLICClient, GetRepositoryCatalogDataCommand } = require("@aws-sdk/client-ecr-public"); // CommonJS import
 * const client = new ECRPUBLICClient(config);
 * const command = new GetRepositoryCatalogDataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRepositoryCatalogDataCommandInput} for command's `input` shape.
 * @see {@link GetRepositoryCatalogDataCommandOutput} for command's `response` shape.
 * @see {@link ECRPUBLICClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetRepositoryCatalogDataCommand extends $Command<
  GetRepositoryCatalogDataCommandInput,
  GetRepositoryCatalogDataCommandOutput,
  ECRPUBLICClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetRepositoryCatalogDataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECRPUBLICClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRepositoryCatalogDataCommandInput, GetRepositoryCatalogDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRPUBLICClient";
    const commandName = "GetRepositoryCatalogDataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRepositoryCatalogDataRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetRepositoryCatalogDataResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetRepositoryCatalogDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetRepositoryCatalogDataCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRepositoryCatalogDataCommandOutput> {
    return deserializeAws_json1_1GetRepositoryCatalogDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
