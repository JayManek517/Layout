// import type { Theme, SxProps } from '@mui/material/styles';
// import type { BreadcrumbsProps } from '@mui/material/Breadcrumbs';

// import Breadcrumbs from '@mui/material/Breadcrumbs';

// import { BackLink } from './back-link';
// import { MoreLinks } from './more-links';
// import { BreadcrumbsLink } from './breadcrumb-link';
// import {
//   BreadcrumbsRoot,
//   BreadcrumbsHeading,
//   BreadcrumbsContent,
//   BreadcrumbsContainer,
//   BreadcrumbsSeparator,
// } from './styles';

// import type { MoreLinksProps } from './more-links';
// import type { BreadcrumbsLinkProps } from './breadcrumb-link';

// // ----------------------------------------------------------------------

// export type CustomBreadcrumbsSlotProps = {
//   breadcrumbs: BreadcrumbsProps;
//   moreLinks: Omit<MoreLinksProps, 'links'>;
//   heading: React.ComponentProps<typeof BreadcrumbsHeading>;
//   content: React.ComponentProps<typeof BreadcrumbsContent>;
//   container: React.ComponentProps<typeof BreadcrumbsContainer>;
// };

// export type CustomBreadcrumbsSlots = {
//   breadcrumbs?: React.ReactNode;
// };

// export type CustomBreadcrumbsProps = React.ComponentProps<'div'> & {
//   sx?: SxProps<Theme>;
//   heading?: string;
//   activeLast?: boolean;
//   backHref?: string;
//   action?: React.ReactNode;
//   links?: BreadcrumbsLinkProps[];
//   moreLinks?: MoreLinksProps['links'];
//   slots?: CustomBreadcrumbsSlots;
//   slotProps?: Partial<CustomBreadcrumbsSlotProps>;
// };

// export function CustomBreadcrumbs({
//   sx,
//   action,
//   backHref,
//   heading,
//   slots = {},
//   links = [],
//   moreLinks = [],
//   slotProps = {},
//   activeLast = false,
//   ...other
// }: CustomBreadcrumbsProps) {
//   const lastLink = links[links.length - 1]?.name;

//   const renderHeading = () => (
//     <BreadcrumbsHeading {...slotProps?.heading}>
//       {backHref ? <BackLink href={backHref} label={heading} /> : heading}
//     </BreadcrumbsHeading>
//   );

//   const renderLinks = () =>
//     slots?.breadcrumbs ?? (
//       <Breadcrumbs separator={<BreadcrumbsSeparator />} {...slotProps?.breadcrumbs}>
//         {links.map((link, index) => (
//           <BreadcrumbsLink
//             key={link.name ?? index}
//             icon={link.icon}
//             href={link.href}
//             name={link.name}
//             disabled={link.name === lastLink && !activeLast}
//           />
//         ))}
//       </Breadcrumbs>
//     );

//   const renderMoreLinks = () => <MoreLinks links={moreLinks} {...slotProps?.moreLinks} />;

//   return (
//     <BreadcrumbsRoot sx={sx} {...other}>
//       <BreadcrumbsContainer {...slotProps?.container}>
//         <BreadcrumbsContent {...slotProps?.content}>
//           {(heading || backHref) && renderHeading()}
//           {(!!links.length || slots?.breadcrumbs) && renderLinks()}
//         </BreadcrumbsContent>
//         {action}
//       </BreadcrumbsContainer>

//       {!!moreLinks?.length && renderMoreLinks()}
//     </BreadcrumbsRoot>
//   );
// }

import type { Theme, SxProps } from '@mui/material/styles';
import type { BreadcrumbsProps } from '@mui/material/Breadcrumbs';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import {
  StyledLink,
  BreadcrumbsRoot,
  StyledBreadcrumbs,
  BreadcrumbsHeading,
  BreadcrumbsContent,
  StyledDisabledLink,
  BreadcrumbsContainer,
} from './styles';

export type BreadcrumbsLinkProps = {
  name: string;
  href?: string;
  icon?: React.ReactNode;
};

export type MoreLinksProps = {
  links: { name: string; href?: string }[];
};

export type CustomBreadcrumbsSlotProps = {
  breadcrumbs: BreadcrumbsProps;
  heading: React.ComponentProps<typeof BreadcrumbsHeading>;
  content: React.ComponentProps<typeof BreadcrumbsContent>;
  container: React.ComponentProps<typeof BreadcrumbsContainer>;
};

export type CustomBreadcrumbsSlots = {
  breadcrumbs?: React.ReactNode;
};

export type CustomBreadcrumbsProps = React.ComponentProps<'div'> & {
  sx?: SxProps<Theme>;
  heading?: string;
  activeLast?: boolean;
  backHref?: string;
  action?: React.ReactNode;
  links?: BreadcrumbsLinkProps[];
  moreLinks?: MoreLinksProps['links'];
  slots?: CustomBreadcrumbsSlots;
  slotProps?: Partial<CustomBreadcrumbsSlotProps>;
};

export function CustomBreadcrumbs({
  sx,
  action,
  heading,
  slots = {},
  links = [],
  slotProps = {},
  activeLast = false,
  ...other
}: CustomBreadcrumbsProps) {
  const lastLink = links[links.length - 1]?.name;

  const renderHeading = () => (
    <BreadcrumbsHeading {...slotProps?.heading}>{heading}</BreadcrumbsHeading>
  );

  const renderLinks = () =>
    slots?.breadcrumbs ?? (
      <StyledBreadcrumbs
        separator={<KeyboardArrowRightIcon fontSize="small" />}
        {...slotProps?.breadcrumbs}
      >
        {links.map((link, index) => {
          const isLast = link.name === lastLink;
          const isDisabled = isLast && !activeLast;

          return isDisabled ? (
            <StyledDisabledLink key={link.name ?? index}>{link.name}</StyledDisabledLink>
          ) : (
            <StyledLink key={link.name ?? index} href={link.href}>
              {link.name}
            </StyledLink>
          );
        })}
      </StyledBreadcrumbs>
    );

  return (
    <BreadcrumbsRoot sx={sx} {...other}>
      <BreadcrumbsContainer {...slotProps?.container}>
        <BreadcrumbsContent {...slotProps?.content}>
          {heading && renderHeading()}
        </BreadcrumbsContent>
        {!!links.length && renderLinks()}
        {action}
      </BreadcrumbsContainer>
    </BreadcrumbsRoot>
  );
}
