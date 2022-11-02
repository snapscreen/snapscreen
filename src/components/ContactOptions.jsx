import { EmailIcon, LinkedinIcon, TwitterIcon, GithubIcon } from '@/components/Icons'

export function ContactOptions() {
  return (
    <dl className="my-4 space-y-2 text-lg lg:text-xl tracking-tight">
      <div className="flex gap-2 items-center">
        <dt>
          <EmailIcon />
          <span className="sr-only">Email</span>
        </dt>
        <dd>
          <a
            href="mailto:hello@snapscreen.com"
            className="hover:text-blue-600"
            rel="noreferrer"
            target="_blank"
          >
            hello@snapscreen.com
          </a>
        </dd>
      </div>
      <div className="flex gap-2 items-center">
        <dt>
          <LinkedinIcon />
          <span className="sr-only">LinkedIn</span>
        </dt>
        <dd>
          <a
            href="https://www.linkedin.com/company/Snapscreen"
            className="hover:text-blue-600"
            rel="noreferrer"
            target="_blank"
          >
            company/Snapscreen
          </a>
        </dd>
      </div>
      <div className="flex gap-2 items-center">
        <dt>
          <TwitterIcon />
          <span className="sr-only">Twitter</span>
        </dt>
        <dd>
          <a
            href="https://twitter.com/snapscreen_com"
            className="hover:text-blue-600"
            rel="noreferrer"
            target="_blank"
          >
            @snapscreen_com
          </a>
        </dd>
      </div>
      <div className="flex gap-2 items-center">
        <dt>
          <GithubIcon />
          <span className="sr-only">Github</span>
        </dt>
        <dd>
          <a
            href="https://github.com/snapscreen"
            className="hover:text-blue-600"
            rel="noreferrer"
            target="_blank"
          >
            snapscreen
          </a>
        </dd>
      </div>
    </dl>
  )
}
