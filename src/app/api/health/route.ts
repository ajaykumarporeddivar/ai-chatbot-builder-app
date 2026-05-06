export async function GET(): Promise<Response> {
  return new Response(JSON.stringify({
    ok: true,
    version: '1.0.0',
    mode: 'demo',
    ts: Date.now(),
    features: ['dashboard', 'analytics', 'export'],
  }), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}