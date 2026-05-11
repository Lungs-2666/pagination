    const url = new URL(`${process.env.API_URL}`);

    url.searchParams.append('completed', false);
    url.searchParams.append('page', 1);
    url.searchParams.append('limit', 10);

    fetch();