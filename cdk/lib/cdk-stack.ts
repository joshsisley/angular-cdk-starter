import * as cdk from "aws-cdk-lib";
import { SPADeploy } from "./angular-deploy-construct";
import { Construct } from "constructs";

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new SPADeploy(this, "spaDeploy", {
      encryptBucket: true,
    }).createSiteFromHostedZone({
      zoneName: "cdkdeploy.com",
      indexDoc: "index.html",
      websiteFolder: "../client/dist/client",
    });
  }
}
