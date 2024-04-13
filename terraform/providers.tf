# https://www.alexhyett.com/terraform-s3-static-website-hosting/

terraform {
  required_version = "1.7.5"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }

  backend "s3" {
    bucket = "hashtaglegal.in-terraform"
    key    = "prod/terraform.tfstate"
    region = var.region
  }
}

provider "aws" {
  access_key = var.aws_access_key
  secret_key = var.aws_secret_key
  region     = var.region

}
