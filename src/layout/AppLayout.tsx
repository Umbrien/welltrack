import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "../components/ui/tooltip";
import { TableProperties, CalendarDays, CirclePlus } from "lucide-react";
import { Link } from "wasp/client/router";
import "../Main.css";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider>
      <div className="flex flex-col gap-3 min-h-dvh">
        <nav className="bg-primary p-4 flex items-center justify-between">
          <img src="/logo.svg" alt="logo" className="h-8" />
          <div className="flex gap-4">
            <Tooltip>
              <TooltipTrigger>
                <Link to="/day-analysis">
                  <TableProperties size={24} color="white" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>Week view</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <Link to="/month-analysis">
                  <CalendarDays size={24} color="white" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>Month view</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <Link to="/">
                  <CirclePlus size={24} color="white" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>Add record</TooltipContent>
            </Tooltip>
          </div>
        </nav>
        {children}
      </div>
    </TooltipProvider>
  );
}
