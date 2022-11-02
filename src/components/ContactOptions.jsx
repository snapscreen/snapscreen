import { EmailIcon, LinkedinIcon, TwitterIcon, GithubIcon } from '@/components/Icons'

export function ContactOptions() {
  return (
    <dl className="my-4 space-y-2 text-lg lg:text-xl tracking-tight">
      <div className="flex gap-2 items-center">
        <dt>
          <EmailIcon />
          <span className="sr-only">Email</span>
        </dt>
        <dd>hello@snapscreen.com</dd>
      </div>
      <div className="flex gap-2 items-center">
        <dt>
          <LinkedinIcon />
          <span className="sr-only">LinkedIn</span>
        </dt>
        <dd>company/Snapscreen</dd>
      </div>
      <div className="flex gap-2 items-center">
        <dt>
          <TwitterIcon />
          <span className="sr-only">Twitter</span>
        </dt>
        <dd>@Snapscreen_com</dd>
      </div>
      <div className="flex gap-2 items-center">
        <dt>
          <GithubIcon />
          <span className="sr-only">Github</span>
        </dt>
        <dd>snapscreen</dd>
      </div>
    </dl>
  )
}
