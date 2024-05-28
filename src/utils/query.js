const paginate = (query, { page, pageSize }) => {

    const offset = page * pageSize;
    const limit = pageSize;
  
    return {
      ...query,
      offset,
      limit,
    };
};

const getPaginatedData = (params,{ count, rows }) => {
  return {
    current_page: parseInt(params.page),
    last_page:parseInt(count/parseInt(params.page_size)) - 1,
    data: rows,
    total: count,
  }
}

module.exports = { paginate, getPaginatedData }