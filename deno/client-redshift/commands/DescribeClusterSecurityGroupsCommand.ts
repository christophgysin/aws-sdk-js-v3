
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient.ts";
import { ClusterSecurityGroupMessage, DescribeClusterSecurityGroupsMessage } from "../models/models_0.ts";
import {
  deserializeAws_queryDescribeClusterSecurityGroupsCommand,
  serializeAws_queryDescribeClusterSecurityGroupsCommand,
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

export type DescribeClusterSecurityGroupsCommandInput = DescribeClusterSecurityGroupsMessage;
export type DescribeClusterSecurityGroupsCommandOutput = ClusterSecurityGroupMessage & __MetadataBearer;

export class DescribeClusterSecurityGroupsCommand extends $Command<
  DescribeClusterSecurityGroupsCommandInput,
  DescribeClusterSecurityGroupsCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeClusterSecurityGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeClusterSecurityGroupsCommandInput, DescribeClusterSecurityGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DescribeClusterSecurityGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeClusterSecurityGroupsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ClusterSecurityGroupMessage.filterSensitiveLog,
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

  private serialize(input: DescribeClusterSecurityGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeClusterSecurityGroupsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeClusterSecurityGroupsCommandOutput> {
    return deserializeAws_queryDescribeClusterSecurityGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
