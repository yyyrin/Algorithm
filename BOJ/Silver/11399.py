# [BOJ] 11399. ATM

# 각 사람이 돈을 인출하는데 필요한 시간의 합의 최솟값

N = int(input())  # 사람의 수
times = list(map(int, input().split()))  # 각 사람이 돈을 인출하는데 걸리는 시간

times.sort()  # 작은 순서대로 정렬
ans = 0  # 정답 변수를 0으로 만들기

for i in range(1, N+1):
    ans += sum(times[0:i])  # 리스트의 0 ~ i까지 시간 더하기
print(ans)