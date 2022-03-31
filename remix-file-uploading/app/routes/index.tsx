import { ActionFunction, Form, json } from "remix";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()

  console.log(formData.get('file'))

  return json({})
}

export default function Index() {
  return (
    <Form>
      <input type="file" name="file" />
      <button>submit</button>
    </Form>
  );
}
