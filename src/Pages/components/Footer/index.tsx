import { AiFillGithub } from 'react-icons/ai';

export function Footer() {
  return (
    <div className="mt-5 mb-2">
      <div className="flex justify-center">
        <a className="flex" href="https://github.com/dim0147">
          <AiFillGithub size={20} /> <span>dim0147</span>
        </a>
      </div>
    </div>
  );
}