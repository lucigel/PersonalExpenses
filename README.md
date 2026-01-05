# Git Flow

## Git Branches

The project adopts a branch management model with three main branch types: `main`, `dev`, and `feature/*`.  
The goal is to **separate stable code, code under development, and feature-specific work**.

---

### 1. `main` Branch

**Purpose**
- Contains the **stable version** of the project
- Ready to be deployed to the production environment

**Characteristics**
- Code on `main` must always:
  - Build successfully
  - Run stably
  - Contain no experimental code

**Rules**
- Do not commit directly to `main`
- Only merge from the `dev` branch
- Each merge into `main` corresponds to a release version or milestone

---

### 2. `dev` Branch

**Purpose**
- The primary development branch of the project
- Used to integrate completed features from `feature/*` branches

**Characteristics**
- Code on `dev`:
  - May not be fully stable
  - Must be buildable and runnable
- Acts as the integration and testing stage before merging into `main`

**Rules**
- Do not commit directly to `dev`
- Only merge via Pull Requests from `feature/*` branches  
  *(Pull Request: https://docs.github.com/en/pull-requests)*
- Regularly pull or rebase to avoid conflicts  
  *(Rebase: https://git-scm.com/docs/git-rebase)*

---

### 3. `feature/xxx` Branch

**Purpose**
- Used to develop **a specific feature** or **an individual’s task**

**Naming Convention**
- By functionality:
  - `feature/login`
  - `feature/user-management`
- By contributor:
  - `feature/taiphd`

**Characteristics**
- Each branch should focus on **a single feature**
- Free commits are allowed during development

**Rules**
- When the feature is completed:
  - Push code to the repository
  - Create a Pull Request into the `dev` branch
- After merging:
  - The `feature/xxx` branch can be deleted to keep the repository clean

---

### Overall Workflow

```text
feature/xxx  →  dev  →  main
