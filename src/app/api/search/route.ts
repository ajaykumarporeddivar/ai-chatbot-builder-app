import { MOCK_USERS } from '@/lib/data';

export async function GET({ request }: { request: Request }): Promise<Response> {
  const url = new URL(request.url);
  const q = url.searchParams.get('q') || '';
  const type = url.searchParams.get('type');
  const results = MOCK_USERS.filter((user) => {
    const name = user.name.toLowerCase();
    const title = user.role.toLowerCase();
    return name.includes(q.toLowerCase()) || title.includes(q.toLowerCase());
  });
  const total = results.length;
  if (!q) {
    return new Response(JSON.stringify({
      ok: true,
      data: {
        results: results.slice(0, 5),
        total,
        query: q,
      },
    }), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  return new Response(JSON.stringify({
    ok: true,
    data: {
      results: results.slice(0, 20),
      total,
      query: q,
    },
  }), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}