import CloseIcon from "./assets/icons/close.svg";
import Modal from "./modal";
import React from "react";
import classNames from "classnames";

interface Props {
  isOpen: boolean;
  onDismiss?: () => void;
}

function Title({ children }: { children: string }) {
  return <div className="text-lg font-normal text-gray-4">{children}</div>;
}

function H1({ children }: { children: string }) {
  return <div className="mt-5 text-lg font-normal text-gray-4">{children}</div>;
}

function P({
  noTopMargin,
  children,
}: {
  noTopMargin?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={classNames("text-sm font-normal text-gray-1", {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        "mt-3": !noTopMargin,
      })}
    >
      {children}
    </div>
  );
}

function A({ href, children }: { href: string; children: string }) {
  return (
    <span className="text-blue">
      <a target="_blank" rel="noreferrer" href={href}>
        {children}
      </a>
    </span>
  );
}

export default function AboutModal({ isOpen, onDismiss }: Props) {
  const handleClickCloseBtn = () => {
    if (onDismiss) onDismiss();
  };

  const body = (
    <div className="flex flex-col min-h-0">
      <div className="flex items-center justify-between flex-shrink-0 py-4 px-8 border-b border-gray-6">
        <Title>About This Demo</Title>
        <div
          className="flex items-center justify-center h-7 w-7 rounded hover:bg-gray-400"
          onClick={handleClickCloseBtn}
        >
          <CloseIcon className="w-4" />
        </div>
      </div>
      <div className="flex flex-col flex-1 px-8 pt-4 pb-8 overflow-y-auto">
        <P noTopMargin>
          Repliear is a loving &hearts; tribute to the{" "}
          <A href="https://linear.app/">Linear issue tracker</A> built with{" "}
          <A href="https://replicache.dev">Replicache.</A>
        </P>

        <P>
          Replicache makes it much easier to build apps like Linear. To show
          how, this demo recreates a subset of the Linear experience, focusing
          on the distinctive features that are especially difficult to engineer.
        </P>

        <H1>Key Features</H1>
        <ul
          /* i was tired and needed to ship */
          style={{
            listStyleType: "circle",
            padding: "1em",
          }}
          className="text-sm font-normal text-gray-1"
        >
          <li
            style={{
              marginBottom: "0.5em",
            }}
          >
            <b>Dataset:</b> The entire React issue db as of April 2022. ~11k
            issues, ~50 MB of data.
          </li>
          <li
            style={{
              marginBottom: "0.5em",
            }}
          >
            <b>Spinner-free:</b> Everything in the UI responds instantly,
            without progress bars.
          </li>
          <li
            style={{
              marginBottom: "0.5em",
            }}
          >
            <b>Realtime sync:</b> Any change made by one user is seen ~instantly
            by others. Open in two windows to test. Even works across views!
          </li>
          <li>
            <b>Complex filters:</b> Use the filter picker in the top nav to
            build complex filters.
          </li>
        </ul>

        <H1>Learn More</H1>
        <P>
          Learn more at <A href="https://replicache.dev">replicache.dev</A>, or
          come visit us in <A href="https://discord.replicache.dev">Discord</A>.
        </P>

        <P>
          Check out the source for this demo at{" "}
          <A href="https://github.com/rocicorp/repliear">
            github.com/rocicorp/repliear
          </A>
          .
        </P>
      </div>
    </div>
  );

  return (
    <Modal
      isOpen={isOpen}
      center={true}
      size="wide"
      onDismiss={onDismiss}
      className="border border-gray-6"
    >
      {body}
    </Modal>
  );
}