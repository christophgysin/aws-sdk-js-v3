import {
  ComprehendMedicalClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ComprehendMedicalClient.ts";
import { StartICD10CMInferenceJobRequest, StartICD10CMInferenceJobResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1StartICD10CMInferenceJobCommand,
  serializeAws_json1_1StartICD10CMInferenceJobCommand,
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

export interface StartICD10CMInferenceJobCommandInput extends StartICD10CMInferenceJobRequest {}
export interface StartICD10CMInferenceJobCommandOutput extends StartICD10CMInferenceJobResponse, __MetadataBearer {}

/**
 * <p>Starts an asynchronous job to detect medical conditions and link them to the ICD-10-CM
 *       ontology. Use the <code>DescribeICD10CMInferenceJob</code> operation to track the status of a
 *       job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, StartICD10CMInferenceJobCommand } from "../../client-comprehendmedical/mod.ts";
 * // const { ComprehendMedicalClient, StartICD10CMInferenceJobCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * const client = new ComprehendMedicalClient(config);
 * const command = new StartICD10CMInferenceJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartICD10CMInferenceJobCommandInput} for command's `input` shape.
 * @see {@link StartICD10CMInferenceJobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendMedicalClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class StartICD10CMInferenceJobCommand extends $Command<
  StartICD10CMInferenceJobCommandInput,
  StartICD10CMInferenceJobCommandOutput,
  ComprehendMedicalClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartICD10CMInferenceJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendMedicalClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartICD10CMInferenceJobCommandInput, StartICD10CMInferenceJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendMedicalClient";
    const commandName = "StartICD10CMInferenceJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartICD10CMInferenceJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartICD10CMInferenceJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartICD10CMInferenceJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartICD10CMInferenceJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartICD10CMInferenceJobCommandOutput> {
    return deserializeAws_json1_1StartICD10CMInferenceJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
