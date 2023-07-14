const REPOSITORY_SAGA_SUCCESS = 'REPOSITORY_SAGA_SUCCESS'

const REPOSITORY_SAGA_FAILED = 'REPOSITORY_SAGA_FAILED'

export const sagaActions = (data) => ({
  type: REPOSITORY_SAGA_SUCCESS,
  payload: data,
});


export const sagaActionsFalied = (data) => ({
  type: REPOSITORY_SAGA_FAILED,
  payload: data,
});