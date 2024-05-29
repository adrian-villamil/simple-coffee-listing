interface Props {
  children: React.ReactNode;
}

export const TabList = ({ children }: Props) => {
  return (
    <div className="flex justify-center gap-3">
      {children}
    </div>
  )
}
