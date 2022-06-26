import clsx from 'clsx'

type Props = {
  children: React.ReactNode
  className?: string
  href?: string
}

const Highlighted = ({ children, className, href }: Props) => {
  if (href) {
    return (
      <a
        className={clsx(
          className || 'bg-blue-500 hover:bg-blue-400',
          'px-2 py-0.5 text-white transition-all font-semibold rounded-md',
        )}
        href={href}
      >
        {children}
      </a>
    )
  }

  return (
    <span
      className={clsx(
        className || 'bg-blue-500',
        'px-2 py-0.5 text-white transition-all font-semibold rounded-md',
      )}
    >
      {children}
    </span>
  )
}

export default Highlighted
