# 사냥꾼

import sys
sys.stdin = open('input_11718.txt')

T = int(input())
for tc in range(1, T+1):
    N = int(input())  # 배열의 크기
    arr = [list(map(int, input().split())) for _ in range(N)]

    # 0: 빈공간 / 1: 사냥꾼 / 2: 토끼 / 3: 바위

    # 1) 사냥꾼 좌표 찾기
    hunter = []  # 사냥꾼 좌표 저장할 리스트
    for i in range(N):
        for j in range(N):
            if arr[i][j] == 1:
                hunter.append((i, j))


    # 2) 8방향 돌아가며 토끼 잡기
    delta = [(1, 0), (0, 1), (-1, 0), (0, -1), (-1, 1), (1, 1), (1, -1), (-1, -1)]

    kill = 0    # 잡은 토끼 수
    for i in range(len(hunter)):
        x, y = hunter[i]

        for dx, dy in delta:
            nx, ny = x + dx, y + dy

            # 범위 안에 위치하고, 사냥꾼과 바위가 아닌 동안에
            while -1 < nx < N and -1 < ny < N and arr[nx][ny] != 1 and arr[nx][ny] != 3:

                if arr[nx][ny] == 2:        # 토끼라면
                    kill += 1
                nx, ny = nx + dx, ny + dy   # 한 칸씩 전진

    print(f'#{tc} {kill}')



