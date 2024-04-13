variable "domain_name" {
  type        = string
  default     = "hashtaglegal.in"
  description = "The domain name for the website."
}

variable "bucket_name" {
  type        = string
  default     = "hashtaglegal.in"
  description = "The name of the bucket without the www. prefix. Normally domain_name."
}

variable "common_tags" {
  description = "Common tags you want applied to all components."
}

variable "aws_access_key" {
  type = string
}

variable "aws_secret_key" {
  type = string
}

variable "region" {
  default = "ap-south-1"
}