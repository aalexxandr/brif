import SendRequest from '../components/SendRequest/SendRequest'
import OpenedRequests from '../components/OpenedRequests/OpenedRequestsContainer'
import ClosedRequests from '../components/ClosedRequests/ClosedRequestsContainer'
import DeletedRequests from '../components/DeletedRequests/DeteledRequestsContainer'
import AdminsList from '../components/AdminsList/AdminsListContainer'

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
    Component : OpenedRequests,
    private: true
  },
  {
    name : 'Закрытые заявки',
    path : '/closed_requests',
    Component : ClosedRequests,
    private: true
  },
  {
    name : 'Корзина',
    path : '/deleted_requests',
    Component : DeletedRequests,
    private: true
  },
  {
    name : 'Администраторы',
    path : '/admins',
    Component : AdminsList,
    private: true
  }
]