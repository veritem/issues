import { ActionFunction, Form, json, unstable_createMemoryUploadHandler, unstable_parseMultipartFormData } from "remix";



export const action: ActionFunction = async ({ request }) => {
  const uploadHandler = unstable_createMemoryUploadHandler({
    maxFileSize: 5_000_000
  })

  const formData = await unstable_parseMultipartFormData(request, uploadHandler);

  const values = Object.fromEntries(formData)


  console.log(values)


  return json({})
}

export default function Index() {
  return (
    <Form method="post" encType="multipart/form-data">
      <input type="text" name="name" placeholder="enter name" />
      <input type="file" name="file" />
      <button>submit</button>
    </Form>
  );
}
