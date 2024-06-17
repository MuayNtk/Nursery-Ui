import * as React from 'react';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}) as typeof Chip;

function handleClick(event: React.MouseEvent<Element, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

interface Breadcrumb {
  label: string;
  href?: string;
  icon?: React.ReactElement;
  onDelete?: (event: React.MouseEvent) => void;
}

interface CustomizedBreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
}

export default function CustomizedBreadcrumbs({ breadcrumbs }: CustomizedBreadcrumbsProps) {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        {breadcrumbs.map((breadcrumb, index) => (
          <StyledBreadcrumb
            key={index}
            component="a"
            href={breadcrumb.href}
            label={breadcrumb.label}
            icon={breadcrumb.icon}
            onDelete={breadcrumb.onDelete}
          />
        ))}
      </Breadcrumbs>
    </div>
  );
}
