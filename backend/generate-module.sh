#!/bin/bash

# Usage:
# ./generate-module.sh account
# ./generate-module.sh transaction
# ./generate-module.sh user

MODULE_NAME=$1

if [ -z "$MODULE_NAME" ]; then
  echo "❌ Please provide module name"
  exit 1
fi

# Convert kebab-case to camelCase
to_camel_case() {
  echo "$1" | awk -F- '{
    for(i=1;i<=NF;i++){
      if(i==1){
        printf tolower($i)
      } else {
        printf toupper(substr($i,1,1)) tolower(substr($i,2))
      }
    }
  }'
}

# Convert kebab-case to PascalCase
to_pascal_case() {
  echo "$1" | awk -F- '{
    for(i=1;i<=NF;i++){
      printf toupper(substr($i,1,1)) tolower(substr($i,2))
    }
  }'
}

CAMEL_NAME=$(to_camel_case "$MODULE_NAME")
PASCAL_NAME=$(to_pascal_case "$MODULE_NAME")

MODULE_DIR="src/modules/$MODULE_NAME"

mkdir -p "$MODULE_DIR"

echo "📁 Creating module: $MODULE_NAME"

# =========================
# CONTROLLER
# =========================

cat > "$MODULE_DIR/$MODULE_NAME.controller.ts" <<EOF
import type { Request, Response } from "express";

import { ${PASCAL_NAME}Service } from "./${MODULE_NAME}.service";

export class ${PASCAL_NAME}Controller {
	constructor( private readonly ${CAMEL_NAME}Service: ${PASCAL_NAME}Service ) {}

	// Add controller methods here
}
EOF

# =========================
# SERVICE
# =========================

cat > "$MODULE_DIR/$MODULE_NAME.service.ts" <<EOF
import type { ${PASCAL_NAME}Repository } from "./${MODULE_NAME}.repository";

export class ${PASCAL_NAME}Service {
	constructor( private readonly ${CAMEL_NAME}Repository: ${PASCAL_NAME}Repository ) {}

	// Add service methods here
}
EOF

# =========================
# REPOSITORY
# =========================

cat > "$MODULE_DIR/$MODULE_NAME.repository.ts" <<EOF
import { db } from './../../config/db.config';

import { } from "./${MODULE_NAME}.schema";

import type { } from "./${MODULE_NAME}.types";

export class ${PASCAL_NAME}Repository {
	// Add repository methods here
}
EOF

# =========================
# ROUTES
# =========================

cat > "$MODULE_DIR/$MODULE_NAME.routes.ts" <<EOF
import { Router } from "express";

import { ${CAMEL_NAME}Controller } from "./${MODULE_NAME}.module";

import validateRequest, {
	ValidationSource,
} from "../../core/middlewares/request-validation.middleware";

import { } from "./${MODULE_NAME}.validation";

const namespace = "ADD-NAMESPACE-HERE";

const ${CAMEL_NAME}Router = Router();

// Add routes here

export default {
	namespace,
	router: ${CAMEL_NAME}Router,
};
EOF

# =========================
# SCHEMA
# =========================

cat > "$MODULE_DIR/$MODULE_NAME.schema.ts" <<EOF
import { baseColumns } from "./../../database/schema/base-columns.schema";
import {
	pgTable,
	text,
} from "drizzle-orm/pg-core";

// export const ADD-SCHEMA-NAME-HERE = pgTable(
//	"${MODULE_NAME}s",
//	{
//		...baseColumns,
//
//		// name: text("name").notNull(),
//	},
// );
EOF

# =========================
# TYPES
# =========================

cat > "$MODULE_DIR/$MODULE_NAME.types.ts" <<EOF
import type { } from "./${MODULE_NAME}.schema";

// export type ${PASCAL_NAME} = typeof ${CAMEL_NAME}s.\$inferSelect;

// export type New${PASCAL_NAME} = typeof ${CAMEL_NAME}s.\$inferInsert;
EOF

# =========================
# VALIDATION
# =========================

cat > "$MODULE_DIR/$MODULE_NAME.validation.ts" <<EOF
import { z } from "zod";

/*
export const create${PASCAL_NAME}Schema =
	z.object({
		name: z
			.string()
			.trim()
			.min(1),
	});

export type Create${PASCAL_NAME}Dto =
	z.infer<
		typeof create${PASCAL_NAME}Schema
	>;

*/
EOF

# =========================
# MODULE
# =========================

cat > "$MODULE_DIR/$MODULE_NAME.module.ts" <<EOF
import { ${PASCAL_NAME}Repository } from "./${MODULE_NAME}.repository";

import { ${PASCAL_NAME}Service } from "./${MODULE_NAME}.service";

import { ${PASCAL_NAME}Controller } from "./${MODULE_NAME}.controller";

const ${CAMEL_NAME}Repository = new ${PASCAL_NAME}Repository();

const ${CAMEL_NAME}Service = new ${PASCAL_NAME}Service(${CAMEL_NAME}Repository);

const ${CAMEL_NAME}Controller = new ${PASCAL_NAME}Controller(${CAMEL_NAME}Service);

export { ${CAMEL_NAME}Repository, ${CAMEL_NAME}Service, ${CAMEL_NAME}Controller, };
EOF

echo "✅ Module '$MODULE_NAME' created successfully"