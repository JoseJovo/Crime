import { useQuasar } from 'quasar'

export default function useNotify () {
  const $q = useQuasar()

  const notifySuccess = (message) => {
    $q.notify({
      type: 'positive',
      message: message || 'Bem Sucedido!'
    })
  }

  const notifyError = (message) => {
    $q.notify({
      type: 'negative',
      message: message || 'Ocorreu uma Falha!'
    })
  }

  return {
    notifySuccess,
    notifyError
  }
}
