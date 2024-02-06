import type { MetaFunction } from "@remix-run/cloudflare";
import { LoaderFunction,json } from '@remix-run/cloudflare'
import { useLoaderData } from "@remix-run/react";


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader: LoaderFunction = async ({ request }) => {
  const { protocol, host } = new URL(request.url)
  const res = await fetch(`${protocol}//${host}/api/helloworld`)
  const res2 = await fetch(`${protocol}//${host}/api/test_env`)
  return json({
    response: await res.json(),
    test_env: await res2.json()
  })
}

export default function Index() {
  const data = useLoaderData<any>()
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <p>This is Response: {JSON.stringify(data.response)}</p>
      <p>This is TEST ENV: {JSON.stringify(data.test_env)}</p>
    </div>
  );
}
