import {
  TbBell,
  TbBulb,
  TbBuildingStore,
  TbCalendarCheck,
  TbCalendarEvent,
  TbChartBar,
  TbChartLine,
  TbChecklist,
  TbCreditCard,
  TbDatabase,
  TbDeviceDesktop,
  TbDeviceMobile,
  TbFileInvoice,
  TbFileSearch,
  TbFilter,
  TbHeadset,
  TbInbox,
  TbLayoutDashboard,
  TbMail,
  TbMessageQuestion,
  TbPackage,
  TbPlugConnected,
  TbReceipt2,
  TbRobot,
  TbSend,
  TbShoppingCart,
  TbStars,
  TbTags,
  TbTarget,
  TbUserCheck,
  TbWorld,
  TbWorldSearch,
} from "react-icons/tb";
import type { IconType } from "react-icons";

/* The picture beside each "what I can build" tab: the workflow itself, step by
   step. The steps come from content.build.items[].flow, so the Malay page gets
   Malay labels, and each step lights up in turn on a 10s loop (see flow-step in
   globals.css). The icon names in the copy map to the icons below. */
export const flowIcons: Record<string, IconType> = {
  inbox: TbInbox,
  mail: TbMail,
  database: TbDatabase,
  user: TbUserCheck,
  task: TbChecklist,
  calendar: TbCalendarEvent,
  availability: TbCalendarCheck,
  payment: TbCreditCard,
  bell: TbBell,
  sale: TbShoppingCart,
  stock: TbPackage,
  invoice: TbFileInvoice,
  einvoice: TbReceipt2,
  chart: TbChartBar,
  question: TbMessageQuestion,
  robot: TbRobot,
  send: TbSend,
  handover: TbHeadset,
  plug: TbPlugConnected,
  clean: TbFilter,
  globe: TbWorld,
  store: TbBuildingStore,
  phone: TbDeviceMobile,
  desktop: TbDeviceDesktop,
  tags: TbTags,
  docsearch: TbFileSearch,
  bulb: TbBulb,
  trend: TbChartLine,
  dashboard: TbLayoutDashboard,
  target: TbTarget,
  search: TbWorldSearch,
  star: TbStars,
};

export type FlowStep = { icon: string; title: string; detail: string };

function PulseDot() {
  return (
    <span className="relative flex h-1.5 w-1.5">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal-600" />
    </span>
  );
}

export function WorkflowDemo({ steps, title, label }: { steps: readonly FlowStep[]; title: string; label: string }) {
  return (
    <div className="flex h-full flex-col bg-gradient-to-br from-bg to-white p-4 sm:p-6">
      <div className="mb-3 flex items-center justify-between gap-2">
        <span className="truncate text-[11px] font-bold text-navy">{title}</span>
        <span className="flex flex-shrink-0 items-center gap-1.5 rounded-full bg-teal-50 px-2 py-0.5 text-[9px] font-semibold text-teal-700">
          <PulseDot /> {label}
        </span>
      </div>

      <ol className="flex flex-1 flex-col justify-between">
        {steps.map((step, i) => {
          const Icon = flowIcons[step.icon] ?? TbPlugConnected;
          return (
            <li key={step.title} className="flex flex-col">
              <div
                className="flex items-center gap-3 rounded-xl border border-border bg-white p-2.5 shadow-sm motion-safe:animate-[flow-step_10s_ease-in-out_infinite] sm:p-3"
                style={{ animationDelay: `${i * 1.8}s` }}
              >
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-600 sm:h-10 sm:w-10">
                  <Icon aria-hidden="true" className="h-4 w-4 sm:h-5 sm:w-5" />
                </span>
                <span className="flex min-w-0 flex-1 flex-col">
                  <span className="truncate text-[11.5px] font-bold text-navy sm:text-[13px]">{step.title}</span>
                  <span className="hidden truncate text-[10px] text-body sm:block sm:text-[11.5px]">{step.detail}</span>
                </span>
                <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-bg text-[9px] font-bold text-muted">
                  {i + 1}
                </span>
              </div>
              {i < steps.length - 1 && <span aria-hidden="true" className="mx-auto h-2 w-px bg-border sm:h-3" />}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
