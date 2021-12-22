#!/usr/bin/env node
import "source-map-support/register";
import cdk = require("aws-cdk-lib");
import { CdkStack } from "../lib/cdk-stack";

const app = new cdk.App();
new CdkStack(app, "CdkStack", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
  tags: {
    Project: "Angular CDK Starter",
    Application: "angular-cdk-starter",
    Environment: "Dev",
    Version: "0.0.1",
    Owner: "josh@sisley.tech",
  },
});
