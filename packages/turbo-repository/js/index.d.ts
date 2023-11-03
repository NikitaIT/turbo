export function detectJsRepository(
  path?: string | undefined | null
): Promise<Repository>;
export class Repository {
  readonly root: string;
  readonly isMonorepo: boolean;
  packageManager(): PackageManager;
  workspaces(): Promise<Array<Workspace>>;
}
export class PackageManager {
  readonly name: string;
}
export class Workspace {
  readonly absolutePath: string;
  readonly repoPath: string;
}
