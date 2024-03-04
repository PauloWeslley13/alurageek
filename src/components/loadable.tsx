/* eslint-disable prettier/prettier */
import { ComponentType, FC, ReactNode, Suspense } from 'react'
import { Loader } from './ui'

type LoadableProps = { children?: ReactNode }

const Loadable = <T extends LoadableProps>(Component: ComponentType<T>): FC<T> => {
  const LoadableComponent: FC<T> = (props) => (
    <Suspense fallback={<Loader label="Carregando" sx={{ height: '100%' }} />}>
      <Component {...props} />
    </Suspense>
  )

  // Adicione um nome de exibição ao componente
  LoadableComponent.displayName = `Loadable(${Component.displayName || Component.name || 'Component'})`

  return LoadableComponent
}

export { Loadable }
