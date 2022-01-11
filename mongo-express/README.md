## Internal Service

- Mongo DB -> cannot be accessed outside of the cluster

## External Service

- Express Server which should accepts request outside of the cluster

## ConfigMap

- contains the config data such as DB Url

## Secrets

- contains secret such as DB user and pw
- secret must be applied before other components that use the secret
  NEVER PUSH IN REMOTE IN PRODUCTION
