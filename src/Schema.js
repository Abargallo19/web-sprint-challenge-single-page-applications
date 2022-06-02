import * as yup from 'yup';


const formSchema = yup.object().shape({
name: yup
.string()
.trim()
.required("Gotta give a name")
.min(2, "name must be at least 2 characters"),

size: yup
.string()
.oneOf(["personal", "medium", "large"]),

pepperoni: yup.boolean(),
ham: yup.boolean(),
olives: yup.boolean(),
chicken: yup.boolean(),

special: yup
.string()


});







export default formSchema;