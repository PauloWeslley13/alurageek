import { ComponentType, FC, ReactNode, Suspense } from 'react'
import { Loader } from '@/presenter/components/ui'

type LoadableProps = { children?: ReactNode }

export const Loadable = <T extends LoadableProps>(
  Component: ComponentType<T>,
): FC<T> => {
  const LoadableComponent: FC<T> = (props) => (
    <Suspense
      fallback={
        <Loader.Root>
          <Loader.Content message="Carregando" />
        </Loader.Root>
      }
    >
      <Component {...props} />
    </Suspense>
  )

  LoadableComponent.displayName = `Loadable(${Component.displayName || Component.name})`
  return LoadableComponent
}
