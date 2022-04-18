import {Schema, model} from "mongoose"; 

interface schema{
    example_field: string,
}

const schema = new Schema<schema>({
    example_field: {type: String, required: false},
});

const schema_model = model<schema>('schema', schema);
export default schema_model;