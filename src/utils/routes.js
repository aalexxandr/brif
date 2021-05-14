import SendRequest from '../components/SendRequest'
import OpenedRequestsContainer from '../components/OpenedRequests/OpenedRequestsContainer'
// import ClosedRequests from '../components/ClosedRequests/ClosedRequestsContainer'

export const routes = [
  {
    name: 'Главная',
    path : '/',
    Component : SendRequest,
    private: false
  },
  {
    name: 'Активные заявки',
    path : '/open_requests',
    Component : OpenedRequestsContainer,
    private: true
  }
  // {
  //   name : 'Закрытые заявки',
  //   path : '/closed_requests',
  //   Component : ClosedRequests,
  //   private: true
  // }
]